import { Link } from 'react-router-dom';

interface Props {
  color?: string;
  to?: string;
  circle?: boolean;
  link?: boolean;
  href?: string;
  target?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  submitType?: boolean;
}

const TButton: React.FC<Props> = ({
  color = 'indigo',
  to = '',
  circle = false,
  href = '',
  link = false,
  target = '_blank',
  children = '',
  onClick = () => console.log('set button action'),
  submitType = false,
}: Props) => {
  const classes = [
    'flex',
    'whitespace-nowrap',
    'text-sm',
    'border',
    'border2',
    'border-transparent',
  ];
  if (link) {
    classes.push('transition-colors');
    switch (color) {
      case 'indigo':
        classes.push('text-indigo-500', 'focus:border-indigo-500');
        break;
      case 'emerald':
        classes.push('text-emerald-500', 'focus:border-emerald-500');
        break;
      case 'neutral':
        classes.push('text-neutral-500', 'focus:border-neutral-500');
        break;
    }
  } else {
    classes.push('text-neutral-200', 'focus:ring-2', 'focus:ring-offset2');
    switch (color) {
      case 'indigo':
        classes.push('text-indigo-500', 'focus:border-indigo-500');
        break;
      case 'emerald':
        classes.push('text-emerald-500', 'focus:border-emerald-500');
        break;
      case 'neutral':
        classes.push('text-neutral-500', 'focus:border-neutral-500');
        break;
    }
  }
  if (circle) {
    classes.push(
      'h8',
      'w-8',
      'items-center',
      'justify-center',
      'rounded-full',
      'text-sm',
    );
  }
  return (
    <>
      {!!href && (
        <a href={href} className={classes.join(' ')} target={target}>
          {children}
        </a>
      )}
      {!!to && (
        <Link to={to} className={classes.join(' ')}>
          {children}
        </Link>
      )}
      {!to && !href && (
        <button
          className={classes.join(' ')}
          type={submitType ? 'submit' : 'button'}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default TButton;
