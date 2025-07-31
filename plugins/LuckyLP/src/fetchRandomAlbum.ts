import { Album, redux } from "@luna/lib";
import { trace } from "./index";

export const fetchRandomAlbum = async () => {
  const albumIds = redux.store.getState().favorites.albums;
  if (!albumIds || albumIds.length === 0) {
    trace.msg.log("No albums found in favorites.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * albumIds.length);
  const randomAlbum = await Album.fromId(albumIds[randomIndex]);

  if (!randomAlbum) {
    trace.msg.err("Failed to retrieve random album.");
    return;
  }
  trace.msg.log(`Random album found: ${randomAlbum.tidalAlbum.artist.name} - ${randomAlbum.tidalAlbum.title}`);

  // Navigate to the selected album page
  redux.actions["router/PUSH"]({ pathname: `/album/${randomAlbum.id}`, search: "", replace: true });
}