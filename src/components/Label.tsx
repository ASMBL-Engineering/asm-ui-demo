export type LabelTypes = {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const Label = ({
  className = 'asm-label',
  htmlFor,
  children,
  required
}: LabelTypes): JSX.Element => (
  <label className={className} htmlFor={htmlFor}>
    {children} {required && <span style={{ color: '#9f3a38' }}> *</span>}
  </label>
);
