import React from 'react';
import {CurrencyExchange} from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyState, CurrencyType} from '../../redux/currencyReducer';
import {
    setAction, setCurrencyAmount, changeCurrency
} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks/hooks';

export const CurrencyEContainer: React.FC = () => {
    const currency = useAppSelector<CurrencyState>(state => state.currency)
    const dispatch = useDispatch()

    const currencies = currency.currencies
    const currentCurrency = currency.currentCurrency
    const isBuying = currency.isBuying
    const amountOfBYN = currency.amountOfBYN
    const amountOfCurrency = currency.amountOfCurrency

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(setCurrencyAmount(value, value));
                } else {
                    dispatch(setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    dispatch(setCurrencyAmount(value, value));
                } else {
                    dispatch(setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy'
            ? dispatch(setAction(true))
            : dispatch(setAction(false));
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency &&
        dispatch(changeCurrency(e.currentTarget.dataset.currency));
    };

    return (
        <CurrencyExchange
            currenciesName={currenciesName}
            currentCurrency={currentCurrency}
            currencyRate={currencyRate}
            isBuying={isBuying}
            amountOfBYN={amountOfBYN}
            amountOfCurrency={amountOfCurrency}
            changeCurrencyField={changeCurrencyField}
            changeAction={changeAction}
            changeCurrentCurrency={changeCurrentCurrency}
        />
    )
}

