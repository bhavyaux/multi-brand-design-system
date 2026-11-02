import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { Button } from '../Button/Button';

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
  args: { label: 'Email', placeholder: 'name@example.com', hint: 'We’ll never share your email.' },
  argTypes: {
    leadingIcon: { control: false },
    trailingIcon: { control: false },
    labelIcon: { control: false },
    action: { control: false },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Filled: Story = { args: { defaultValue: 'bhavya@example.com' } };
export const ErrorState: Story = { name: 'Error', args: { defaultValue: 'bhavya@', error: 'Enter a valid email address.' } };
export const Disabled: Story = { args: { disabled: true } };

export const WithIcons: Story = {
  args: { label: 'Search', placeholder: 'Search products', hint: undefined },
  render: (args) => <Input {...args} leadingIcon={<SearchIcon />} trailingIcon={<InfoIcon />} />,
};

export const WithLabelIcon: Story = {
  render: (args) => <Input {...args} labelIcon={<InfoIcon />} />,
};

export const WithAction: Story = {
  args: { label: 'Promo code', placeholder: 'Enter code', hint: undefined },
  render: (args) => (
    <Input
      {...args}
      action={<Button variant="tertiary" size="sm" disabled={args.disabled}>Apply</Button>}
    />
  ),
};

export const Everything: Story = {
  args: { label: 'Search', placeholder: 'Search products', hint: 'Try “cola” or “chips”.' },
  render: (args) => (
    <Input
      {...args}
      labelIcon={<InfoIcon />}
      leadingIcon={<SearchIcon />}
      trailingIcon={<InfoIcon />}
      action={<Button variant="tertiary" size="sm" disabled={args.disabled}>Search</Button>}
    />
  ),
};

export const AllStates: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Input {...args} label="Default" />
      <Input {...args} label="Filled" defaultValue="bhavya@example.com" />
      <Input {...args} label="Error" defaultValue="bhavya@" error="Enter a valid email address." />
      <Input {...args} label="Disabled" disabled />
    </div>
  ),
};
