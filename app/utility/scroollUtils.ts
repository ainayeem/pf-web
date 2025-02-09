import { usePathname, useRouter } from "next/navigation";

export const scrollTo = (
  router: ReturnType<typeof useRouter>,
  pathname: ReturnType<typeof usePathname>,
  id?: string,
  block: ScrollLogicalPosition = "start"
) => {
  if (pathname !== "/") {
    if (!id) {
      router.push("/");
    } else {
      router.push(`/#${id}`);
    }
    return;
  }

  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block });
  }
};
