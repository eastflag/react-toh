export const CHANGE_HERO = "CHANGE_HERO";

export function changeHero(selectedHero) {
  return {
    type: CHANGE_HERO,
    hero: selectedHero
  }
}