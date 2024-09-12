export const useAsset = (path: string): string => {
  const assets = import.meta.glob("@/assets/dynamic/**/*", {
    eager: true,
    import: "default",
  });
  return assets["/assets/dynamic" + path];
};
