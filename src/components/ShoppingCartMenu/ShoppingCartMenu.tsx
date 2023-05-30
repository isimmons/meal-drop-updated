import styled from 'styled-components';

import { CartItem } from '~/app-state/cart';
import { toEuro } from '~/helpers';
import { Button } from '~/components/Button';
import { Select } from '~/components/forms';
import { Sidebar } from '~/components/Sidebar';
import { Body } from '~/components/typography';

import { ChangeEvent } from 'react';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

type FooterProps = {
  totalPrice: number;
  onClick?: () => void;
};

const Footer = ({ onClick, totalPrice }: FooterProps) => (
  <FooterContainer>
    <TotalSection>
      <Body type="span">Total</Body>
      <Body type="span">{toEuro(totalPrice)}</Body>
    </TotalSection>
    <Button disabled={totalPrice === 0} large onClick={onClick}>
      Checkout
    </Button>
  </FooterContainer>
);

const MenuItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  > div:first-of-type {
    padding-right: 1rem;
    flex: 0.75;
  }

  > div:last-of-type {
    flex: 0.25;
  }
`;

type ShoppingCartMenuItemProps = {
  item: CartItem;
  onChange: (data: number) => void;
};

const ShoppingCartMenuItem = ({
  item,
  onChange,
}: ShoppingCartMenuItemProps) => {
  const handleChange = () => (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <MenuItemContainer>
      <div>
        <Body type="span" fontWeight="medium">
          {item.name}
        </Body>
        <Body>{item.description}</Body>
        <Body>{toEuro(item.price * item.quantity)}</Body>
      </div>
      <Select
        value={item.quantity.toString()}
        onChange={handleChange}
        options={[...Array(11).keys()].map((n) => n.toString())}
      />
    </MenuItemContainer>
  );
};

type ShoppingCartMenuProps = {
  isOpen: boolean;
  totalPrice: number;
  onClose: () => void;
  cartItems: CartItem[];
  onGoToCheckoutClick?: () => void;
  onItemChange: (item: any) => void;
};

export const ShoppingCartMenu = ({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onItemChange,
  onGoToCheckoutClick,
}: ShoppingCartMenuProps) => (
  <Sidebar
    title="Your order"
    onClose={onClose}
    isOpen={isOpen}
    footer={<Footer onClick={onGoToCheckoutClick} totalPrice={totalPrice} />}
  >
    <div style={{ display: 'grid', gap: '24px' }}>
      {cartItems.map((item) => (
        <ShoppingCartMenuItem
          key={item.id}
          item={item}
          onChange={(quantity: number) => onItemChange({ ...item, quantity })}
        />
      ))}
    </div>
  </Sidebar>
);
