import PropTypes from 'prop-types';
import { Section, StyledForm, Label, Input, Title } from './styled';
import { useDispatch } from 'react-redux';
import { setFilterAction } from 'redux/actions';

export const FilterForm = ({ label }) => {
  const dispatch = useDispatch()

  const handleChange = ({target : {value}}) => {
    dispatch(setFilterAction(value))
  }
  return (
    <Section>
      <Title>Contacts</Title>
      <StyledForm>
        <Label htmlFor="filter">{label}</Label>
        <Input
          type="text"
          id="filter"
          name="filter"
          onChange={handleChange}
        />
      </StyledForm>
    </Section>
  );
};

FilterForm.propTypes = {
  label: PropTypes.string.isRequired,
};