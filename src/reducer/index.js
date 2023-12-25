export const WalletReducer = (state, action) => {
	switch (action.type) {
		case "add_transcation": {
			return {
				...state,
				transaction: [...state.transaction, action.payload],
			};
		}

		case "Edit_transaction": {
			const updated = state.transaction.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				} else {
					return item;
				}
			});

			return { ...state, transaction: updated };
		}

		case "Delete_transaction": {
			const Deleted = state.transaction.filter((item) => {
				return item.id !== action.payload;
			});
			return { ...state, transaction: Deleted };
		}
		default: {
			return state;
		}
	}
};
