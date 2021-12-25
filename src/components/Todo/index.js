import { Checkbox, Row, Tag } from 'antd';

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
  // const [checked, setChecked] = useState(completed);

  const handleCheckedClick = () => {
    // setChecked(prevState => !prevState);
    onChangeStatus(id);
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(completed ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={completed} onClick={handleCheckedClick}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
