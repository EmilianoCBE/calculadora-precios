import { Row, Col } from "antd";
import "./GridContainer.css";
import { items } from "../utils/items";
import { GridItem } from "./GridItem";
import { TotalContext } from '../App';
import { useContext } from "react";

export const GridContainer = () => {

  const [totalCountItem] = useContext(TotalContext)
  
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
            <GridItem {...item} />
          </Col>
        ))}
      </Row>
      <p>{totalCountItem}</p>
    </>
  );
};
