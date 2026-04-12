import profile from "../assets/images/profile.webp";

export const Avatar = () => {
  return (
    <div className="flex justify-center mb-2">
        <img
            src={profile}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover p-1.5 neu"
        />
    </div>
  );
};