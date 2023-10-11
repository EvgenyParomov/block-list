import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const blockListKey = ["block-list"] as unknown[];

export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
    keepPreviousData: true,
  });
}

export function useAddBlockItemMutation() {
  const queyrClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    async onSettled() {
      await queyrClient.invalidateQueries(blockListKey);
    },
  });
}

export function useRemoveBlockItemMutation() {
  const queyrClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    async onSettled() {
      await queyrClient.invalidateQueries(blockListKey);
    },
  });
}
