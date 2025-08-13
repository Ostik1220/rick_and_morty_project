import { getCharacterList } from "./api-requests/getListsApi";

getCharacterList(3).then(data => {
  console.log(data);
})