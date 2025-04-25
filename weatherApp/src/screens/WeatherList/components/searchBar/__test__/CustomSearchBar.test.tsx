import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import CustomSearchBar from '../CustomSearchBar';

jest.useFakeTimers(); // mock timers for debounce

describe('CustomSearchBar', () => {
  const onChangeTextMock = jest.fn();
  const onSubmitMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default placeholder', () => {
    const {getByPlaceholderText} = render(
      <CustomSearchBar value="" onChangeText={onChangeTextMock} onSubmit={onSubmitMock} />
    );
    expect(getByPlaceholderText('Search...')).toBeTruthy();
  });

  it('renders correctly with custom placeholder', () => {
    const {getByPlaceholderText} = render(
      <CustomSearchBar
        value=""
        onChangeText={onChangeTextMock}
        onSubmit={onSubmitMock}
        placeholder="Find items"
      />
    );
    expect(getByPlaceholderText('Find items')).toBeTruthy();
  });

  it('updates text and triggers debounce and submit after delay', async () => {
    const {getByPlaceholderText} = render(
      <CustomSearchBar value="" onChangeText={onChangeTextMock} onSubmit={onSubmitMock} />
    );

    const input = getByPlaceholderText('Search...');
    fireEvent.changeText(input, 'React Native');

    // fast-forward debounce
    jest.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(onChangeTextMock).toHaveBeenCalledWith('React Native');
      expect(onSubmitMock).toHaveBeenCalledWith('React Native');
    });
  });

  it('clears the text when clear button is pressed', () => {
    const {getByText, getByPlaceholderText} = render(
      <CustomSearchBar value="Test" onChangeText={onChangeTextMock} onSubmit={onSubmitMock} />
    );

    const clearButton = getByText('clear');
    fireEvent.press(clearButton);

    expect(onChangeTextMock).toHaveBeenCalledWith('');
    expect(getByPlaceholderText('Search...').props.value).toBe('');
  });

  it('submits immediately on return key press', () => {
    const {getByPlaceholderText} = render(
      <CustomSearchBar value="" onChangeText={onChangeTextMock} onSubmit={onSubmitMock} />
    );

    const input = getByPlaceholderText('Search...');
    fireEvent.changeText(input, 'SubmitMe');
    fireEvent(input, 'onSubmitEditing');

    expect(onSubmitMock).toHaveBeenCalledWith('SubmitMe');
  });

  it('does not submit empty or whitespace-only strings', () => {
    const {getByPlaceholderText} = render(
      <CustomSearchBar value="" onChangeText={onChangeTextMock} onSubmit={onSubmitMock} />
    );

    const input = getByPlaceholderText('Search...');
    fireEvent.changeText(input, '   ');
    fireEvent(input, 'onSubmitEditing');

    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
