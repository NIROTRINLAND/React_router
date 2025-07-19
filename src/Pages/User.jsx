import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserContext } from "../context/Context";
import defaultAvatarImg from "../assets/smiling-young-man-illustration/54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg";

function User() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-gray-100">
        {/* Avatar */}
        <div
          className="w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-300 shadow-2xl mb-4 bg-gray-100 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-3xl"
          style={{
            boxShadow: "0 8px 24px 0 rgba(0,0,0,0.18), 0 1.5px 4px 0 rgba(14,165,233,0.25)",
            background: "linear-gradient(135deg, #e0e7ef 60%, #fff 100%)"
          }}
        >
          <img
            src={user.avatar || defaultAvatarImg}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-cyan-700 mb-2 text-center shadow-2xl px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80 transition relative" style={{boxShadow: "0 4px 16px 0 rgba(14,165,233,0.18), 0 1.5px 4px 0 rgba(0,0,0,0.10)"}}>
          {user.name || <span className='text-gray-400'>{t('user_name')}</span>}
        </h1>
        <div className="w-full flex flex-col gap-3 mt-4">
          <ProfileField label={t("email")} value={user.email} />
          <ProfileField label={t("job")} value={user.poste} />
          <ProfileField label={t("profession")} value={user.profession} />
          <ProfileField label={t("blood_group")} value={user.groupeSanguin} />
          <ProfileField label={t("country")} value={user.pays} />
          <ProfileField label={t("marital_status")} value={user.situationMatrimoniale} />
          <ProfileField label={t("bio")} value={user.bio} isTextarea />
        </div>
        <button
          onClick={() => navigate("/dashboard/profil")}
          className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg shadow-2xl transition text-base relative active:top-1 active:shadow-lg"
          style={{
            boxShadow: "0 8px 24px 0 rgba(14,165,233,0.25), 0 1.5px 4px 0 rgba(0,0,0,0.18)"
          }}
        >
         {t('update_profil')} 
        </button>
      </div>
    </div>
  );
}

function ProfileField({ label, value, isTextarea }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1">
      <span className="w-44 text-gray-500 font-medium shrink-0">{label} :</span>
      <span className={`text-gray-800 font-semibold ${isTextarea ? 'whitespace-pre-line' : ''}`}>{value || <span className="text-gray-400 font-normal">Non renseigné</span>}</span>
    </div>
  );
}

export default User;