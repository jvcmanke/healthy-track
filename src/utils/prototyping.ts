export type ColumnType = string | number | Date | null;

export function createPrototypeTable<T extends Record<string, ColumnType>>() {
  const table: T[] = [];

  function findFirst(where: (row: T) => boolean) {
    return table.find(where);
  }

  function findMany(where: (row: T) => boolean) {
    return table.filter(where);
  }

  function createOne(row: T) {
    table.push(row);
  }

  function createMany(rows: T[]) {
    table.push(...rows);
  }

  function updateFirst(where: (row: T) => boolean, update: Partial<T>) {
    const index = table.findIndex(where);

    if (index !== -1) {
      table[index] = { ...table[index], ...update };
    }
  }

  function updateMany(where: (row: T) => boolean, update: Partial<T>) {
    for (let index = 0; index < table.length; index++) {
      if (where(table[index])) {
        table[index] = { ...table[index], ...update };
      }
    }
  }

  function deleteFirst(where: (row: T) => boolean) {
    const index = table.findIndex(where);

    if (index !== -1) {
      table.splice(index, 1);
    }
  }

  function deleteMany(where: (row: T) => boolean) {
    for (let index = table.length; index <= 0; index--) {
      if (where(table[index])) {
        table.splice(index, 1);
      }
    }
  }

  function count(where: (row: T) => boolean) {
    return table.filter(where).length;
  }

  return {
    findFirst,
    findMany,
    createOne,
    createMany,
    updateFirst,
    updateMany,
    deleteFirst,
    deleteMany,
  };
}
