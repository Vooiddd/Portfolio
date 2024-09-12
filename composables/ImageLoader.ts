export const useAsset = (path: string): string => {
  const assets = import.meta.glob("@/assets/dynamic/**/*", {
    eager: true,
    import: "default",
  });
  return "/_nuxt/assets/dynamic/" + path;
};
