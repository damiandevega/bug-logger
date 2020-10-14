import React from 'react';
import { Button, Badge } from 'react-bootstrap';

const LogItem = ({ log: { _id, priority, user, text, created } }) => {
  const setVariant = () => {
    if (priority === 'high') {
      return 'danger';
    } else if (priority === 'moderate') {
      return 'warning';
    } else {
      return 'success';
    }
  };

  return (
    <tr>
      <td>
        <Badge variant={setVariant()} className="p-2">
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </Badge>
      </td>
      <td>{text}</td>
      <td>{user}</td>
      <td>{created}</td>
      <td>
        <Button variant="danger" size="sm">
          x
        </Button>
      </td>
    </tr>
  );
};

export default LogItem;
