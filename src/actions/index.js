export const CHANGE_HERO = "CHANGE_HERO";
export const SET_HERO = "SET_HERO";

export function changeHero(selectedHero) {
  return {
    type: CHANGE_HERO,
    hero: selectedHero
  }
}


export function setHero(id) {
  return {
    type: SET_HERO,
    id: id
  }
}