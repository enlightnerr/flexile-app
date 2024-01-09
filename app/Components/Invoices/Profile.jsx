import Image from 'next/image';
import { profileImg } from '@/app/data/exports';

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="profileImg__container w-16">
        <button>
          <Image src={profileImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Profile;
Profile;
