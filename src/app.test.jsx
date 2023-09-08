import {expect, test} from 'vitest';
import {render} from '@testing-library/react';
import App from './App';

test('test Header Component', () => {
    const {getByText} = render(<App />);
    const header = getByText('Hello Techtonica!');
    expect(header).toBeTruthy();
    });

test('test Form Component', () => {
    const {getByText} = render(<App />);
    const form = getByText('Submit');
    expect(form).toBeTruthy();
    }
);
test('test Item Component', () => {
    const {getByText} = render(<App />);
    const item = getByText('Submit');
    expect(item).toBeTruthy();
    }
);