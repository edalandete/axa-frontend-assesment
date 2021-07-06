export const getOrcById = (orcs, id) => orcs.find((orc) => id === `${orc.id}`);

export const getSelectedOrcFriends = (selectedOrc, orcs) => (selectedOrc.friends.length
  ? selectedOrc.friends.map((orc) => orcs.find(({ name }) => name === orc))
  : []);

export const getOrcsByHairColor = (orcs, hairColor) => orcs.filter(
  (orc) => orc.hair_color.toLowerCase() === hairColor.toLowerCase()
);
