import { Checkbox, Row, Tag } from 'antd';
import { useState } from 'react';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({
  name,
  prioriry,
  completed,
  id,
  onChangeStatus,
}) {
  const [checked, setChecked] = useState(completed);

  const handleCheckedClick = () => {
    setChecked(prevState => !prevState);
    onChangeStatus(id);
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onClick={handleCheckedClick}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
