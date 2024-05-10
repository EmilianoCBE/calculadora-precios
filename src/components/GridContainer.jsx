import { Row, Col } from "antd";
import "./GridContainer.css";
import { items } from "../utils/items";
import { GridItem } from "./GridItem";
import { useState } from "react";

export const GridContainer = () => {
  const [totalCountItem, setTotalCountItem] = useState(0);

  const handleSumtTotal = () => setTotalCountItem(totalCountItem + 1);
  const handleSubractTotal = () => {
    if (totalCountItem > 0) {
      setTotalCountItem(totalCountItem - 1);
    }
  };

  return (
    <>
      <Row className="gridContainer-row" gutter={[24, 24]}>
        {items.map((item) => (
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={{
              flex: "20%",
            }}
            key={item.id}
            className="gridContainer-col"
          >
            <GridItem {...item} handleSubractTotal={handleSubractTotal} handleSumtTotal={handleSumtTotal} totalCountItem={totalCountItem} />
          </Col>
        ))}
      </Row>
      <p>{totalCountItem}</p>
    </>
  );
};
