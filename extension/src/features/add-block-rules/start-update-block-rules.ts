import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from "@/shared/api/generated";
import { setBrowserInterval, setNetRules } from "@/shared/lib/browser";
import { getBlockListNetRules } from "./get-block-list-net-rules";

export function startUpdateBlockRules() {
  setBrowserInterval("update-block-rules", 5 * 1000, async () => {
    console.log("start sync");
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    console.log({ isAuth });
    if (!isAuth) {
      return await setNetRules([]);
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      (r) => r.isBlockingEnabled,
    );

    console.log({ isBlockingEnabled });
    if (!isBlockingEnabled) {
      return await setNetRules([]);
    }
    const rules = await getBlockListNetRules();
    console.log(rules);
    setNetRules(rules);
  });
}
