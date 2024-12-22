export const sorts = [
    { title: "По дате: новые", value: "sort=cr_date-desc" },
    { title: "По дате: старые", value: "sort=cr_date-asc", special: true },
    { title: "По возрастанию цены", value: "sort=price-asc" },
    { title: "По убыванию цены", value: "sort=price-desc" },
    { title: "По году: новее", value: "sort=year-desc" },
    { title: "По году: старше", value: "sort=year-asc" },
    { title: "По пробегу: малый", value: "sort=km_age-asc" },
    { title: "По пробегу: большой", value: "sort=km_age-desc", special: true },
    { title: "По названию: А-Я", value: "sort=alphabet-asc" },
    { title: "По названию: Я-А", value: "sort=alphabet-desc", special: true },
    { title: "По уникальности", value: "sort=autoru_exclusive-desc" },
    { title: "По оценке", value: "sort=price_profitability-desc" },
    { title: "Сначала от собственников", value: "sort=proven_owner-desc" },
  ];
  