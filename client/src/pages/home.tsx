import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiHeader } from "@/shared/ui/ui-header";
import { ToggleBlockingButton } from "@/features/toggle-blocking/ui/toggle-blocking-button";
import { Profile } from "@/widgets/profile";
import { useBlockListQuery } from "@/entities/block-list/queries";
import { AddBlockItemForm, BlockList } from "@/features/block-list";

export function HomePage() {
  const { data } = useBlockListQuery({});
  return (
    <div className={`min-h-screen flex flex-col`}>
      <UiHeader right={<Profile />} />
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main className="pt-10 px-5">
          <h1 className="text-2xl mb-8">Block list</h1>
          <AddBlockItemForm />
          <BlockList className="mt-3" />
        </main>
      </div>
    </div>
  );
}
