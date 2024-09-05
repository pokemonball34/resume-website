import Box from '@mui/material/Box';

export type Props = {
    children?: React.ReactNode;
    index: number;
    value: number;
};

const Tabpanel = (props: Props) => {
    const { children, value, index } = props;
    return <Box hidden={value !== index}>{children}</Box>;
};

export default Tabpanel;
