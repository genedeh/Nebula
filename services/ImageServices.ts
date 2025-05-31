export const getUserProfilePictureSource = (
  profile_picture_path: string | null
) => {
  if (profile_picture_path) {
    return { uri: profile_picture_path };
  } else {
    return require("@/assets/images/default_profile_picture.png");
  }
};
