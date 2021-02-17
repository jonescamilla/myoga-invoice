import { ColorModeSwitch } from '../components/ColorModeSwitch';
import { Container } from '../components/Container';
import InvoiceForm from '../components/invoice/invoiceForm';

const Index = () => {
  return (
    <Container>
      <ColorModeSwitch />
      <InvoiceForm />
    </Container>
  );
};
export default Index;
