import * as React from "react";

import { User } from "../interfaces";
import { useTranslation, withTranslation } from "next-i18next";


type ListDetailProps = {
  item: User;
  t: Function;
};

const ListDetail = ({ item: user, t }: ListDetailProps) => {
  return (
    <div>
      {t("detail.title")}
      <h2>Detail for {user.name}</h2>
      <p>ID: {user.id}</p>
    </div>
  );
};

// export default ListDetail;
export default withTranslation()(ListDetail);
