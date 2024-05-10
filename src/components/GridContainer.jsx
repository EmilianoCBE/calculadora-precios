import { Row, Col } from "antd";
import "./GridContainer.css";
import { GridItem } from "./GridItem";
import { useContext } from "react";
import { TotalContext } from "../App";

export const GridContainer = () => {

  const {items} = useContext(TotalContext)
  
  return (
    <>
      <Row className="gridContainer-row" gutter={{ xs: [8, 8], sm: [16, 16], md: [24, 24], lg: [24, 24] }}>
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
    </>
  );
};
