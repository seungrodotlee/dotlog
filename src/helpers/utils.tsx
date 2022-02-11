export const delay = (duration: number): Promise<void> => {
  return new Promise<void>(async (res) => {
    setTimeout(() => {
      res();
    }, duration);
  });
};

export const changeObjectMembers = (origin: object, datas: object): object => {
  const copied = { ...origin };

  const entries = Object.entries(datas);

  entries.forEach((e) => {
    copied[e[0]] = e[1];
  });

  return copied;
};

export const changeValueIn = <T extends {}>(
  origin: T[],
  idx: number | number[],
  value: T | T[]
) => {
  const copied = [...origin];

  if (typeof idx === "number" && !Array.isArray(value)) {
    copied[idx] = value;
  } else if (Array.isArray(idx) && Array.isArray(value)) {
    idx.forEach((i) => {
      copied[i] = value[i];
    });
  } else {
    throw Error("Unavailable combination of 'idx' and 'value'");
  }

  return copied;
};
