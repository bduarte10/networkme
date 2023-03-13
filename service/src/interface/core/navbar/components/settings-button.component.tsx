import { useTranslation } from "react-i18next";
import {
  IconButton,
  Tooltip
} from "@mui/material"
import CogIcon from "assets/icons/cog.icon";


const SettingsButton: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("partner:pages.settings.title")}>
      <IconButton color="inherit" size="large" id="settingsButton">
        <CogIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}

export default SettingsButton;