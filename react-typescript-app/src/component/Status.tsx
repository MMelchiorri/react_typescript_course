import React from 'react';

type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

function Status(props: StatusProps) {
  let message: string = '';
  if (props.status === 'loading') {
    message = 'Loading data...';
  } else if (props.status === 'success') {
    message = ' Data fetched successfuly';
  } else if ((props.status = 'error')) {
    message = 'Error fetching dats';
  }
  return <div>{message}</div>;
}

export default Status;
