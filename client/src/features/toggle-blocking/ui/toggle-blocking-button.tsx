import { UiButton } from "@/shared/ui/ui-button";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export function ToggleBlockingButton({}) {
  const { isBlockingEnabled, isLoading, toggleBlocking, isReady } =
    useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <UiButton
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? "primary" : "secondary"}
    >
      {isBlockingEnabled ? "Disable Blocking" : "Enable Blocking"}
    </UiButton>
  );
}
