import { render, screen, fireEvent } from '@testing-library/react';
import MainPage from './MainPage';

describe('MainPage', () => {
	describe('MainPage', () => {
		beforeEach(() => {
			render(<MainPage />);
		});

		it('should render the FeatureWheel component', () => {
			const featureWheel = screen.getByTestId('feature-wheel');
			expect(featureWheel).toBeInTheDocument();
		});

		it('should render the AdvantagesList component', () => {
			const advantagesList = screen.getByTestId('advantages-list');
			expect(advantagesList).toBeInTheDocument();
		});

		it('should render the RestartBar component', () => {
			const restartBar = screen.getByTestId('restart-bar');
			expect(restartBar).toBeInTheDocument();
		});

		it('should update the activeIcon state when "r" key is pressed', () => {
			const { queryAllByTestId, queryByTestId } = render(<MainPage />);
			fireEvent.keyDown(window, { key: 'r' });

			const featureCards = queryAllByTestId('feature-card');
			const allActive = featureCards.every((card) => {
				const featureCardElement = queryAllByTestId('feature-card');
				if (featureCardElement instanceof HTMLElement) {
					const isActiveProp =
						featureCardElement.getAttribute('data-is-active');
					return isActiveProp === 'true';
				}
				return false;
			});

			expect(allActive).toBe(false);
		});
	});
});
