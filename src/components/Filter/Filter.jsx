import {useDispatch, useSelector} from 'react-redux';
import {filterByName, selectFilter} from '../../redux';
import {FilterForm, Label, Input} from './Filter.styled'

export const Filter = () => {
	const filter = useSelector(selectFilter);
	const dispatch = useDispatch();

	const onFilterChange = (event) => {
		const stringifyValue = event.target.value.toLowerCase();
		dispatch(filterByName(stringifyValue));
	};
	return (
		<>
			<FilterForm >
				<Label>
					Find contact by name
					<Input
						type="text"
						value={filter}
						onChange={onFilterChange}
						placeholder="Search by name"
					/>
				</Label>
			</FilterForm>
		</>
	)
}

