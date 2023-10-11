import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from "@/shared/api/generated";
import { setBrowserInterval, setIcon } from "@/shared/lib/browser";

export function startToggleExtensionIcon() {
  setBrowserInterval("update-block-rules", 5 * 1000, async () => {
    console.log("start sync");
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    if (!isAuth) {
      setIcon("/hey.png");
      return;
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      (r) => r.isBlockingEnabled,
    );

    if (!isBlockingEnabled) {
      setIcon("/sleaping.png");
      return;
    }

    setIcon("/shield.png");
    return;
  });
}
