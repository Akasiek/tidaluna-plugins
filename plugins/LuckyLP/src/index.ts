import styles from "file://styles.css?minify";

import { LunaUnload, Tracer } from "@luna/core";
import { observe, StyleTag } from "@luna/lib";

import { removeButtonIfPresent, insertButtonAfterHeaderTitle } from "./button";
import { getStylesWithVars } from "./styles";

export const { trace } = Tracer("[Lucky]");
export const unloads = new Set<LunaUnload>();
new StyleTag("Lucky", unloads, getStylesWithVars(styles));

observe(unloads, "div[data-track--page-id='mycollection_albums']", async (pageContainer) => {
  removeButtonIfPresent();
  insertButtonAfterHeaderTitle(pageContainer);
});
