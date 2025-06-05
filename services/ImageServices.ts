import { supabase } from "@/lib/supabase";
import { decode } from "base64-arraybuffer";
import * as FileSystem from "expo-file-system";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;

export const getUserProfilePictureSource = (
  profile_picture_path: string | null | undefined
) => {
  if (profile_picture_path) {
    return getSupabaseFileUrl(profile_picture_path);
  } else {
    return require("@/assets/images/default_profile_picture.png");
  }
};

export const getSupabaseFileUrl = (filePath: string) => {
  if (filePath) {
    return {
      uri: `${supabaseUrl}/storage/v1/object/public/uploads/${filePath}`,
    };
  }
  return null
}

export const uploadFile = async (
  folderName: string,
  fileUri: string,
  isImage: boolean
) => {
  try {
    const fileName = getFilePath(folderName, isImage);
    const fileBase64 = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const imageData = decode(fileBase64);
    const { data, error } = await supabase.storage
      .from("uploads")
      .upload(fileName, imageData, {
        contentType: isImage ? "image/*" : "video/*",
        cacheControl: "3600",
        upsert: false,
      });
    if (error) {
      console.log("File upload Error: ", error);
      return { success: false, msg: "Could not upload media" };
    }
    return {success: true, data: data.path}
  } catch (error) {
    console.log("File upload Error: ", error);
    return { success: false, msg: "Could not upload media" };
  }
};

export const getFilePath = (folderName: string, isImage: boolean) => {
  return `/${folderName}/${new Date().getTime()}${isImage ? ".png" : ".mp4"}`;
};
