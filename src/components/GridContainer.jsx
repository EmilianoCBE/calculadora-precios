import { Row, Col } from "antd"
import './GridContainer.css'

export const GridContainer = () => {
  return (
    <>
      <Row className="row-grid" gutter={[24, 24]}>
        <Col xs={12} sm={12} md={6} lg={{
          flex: '20%',
        }} key={1} className="col-grid">
          <p>Grid</p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={{
          flex: '20%',
        }} key={2} className="col-grid">
          <p>Grid</p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={{
          flex: '20%',
        }} key={3} className="col-grid">
          <p>Grid</p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={{
          flex: '20%',
        }} key={4} className="col-grid">
          <p>Grid</p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={{
          flex: '20%',
        }} key={5} className="col-grid">
          <p>Grid</p>
        </Col>
      </Row>
    </>
  )
}
