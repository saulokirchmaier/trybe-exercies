function techList(list, name) {
    if (!list.length) return 'Vazio!';
    list = list.sort();
    return list.map(element => ({tech: element, name}));
  }

  module.exports = techList;
