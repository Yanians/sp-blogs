import { RootState } from '../store';
import { Product } from '../reducers/productReducers';
export declare const selectAllProducts: (state: RootState) => Product[];
export declare const selectProductListStatus: (state: RootState) => "loading" | "idle" | "succeeded" | "failed";
export declare const selectExpensiveProducts: ((state: {
    cart: import("../reducers/cartReducers").CartState;
    products: import("../reducers/productReducers").ProductsState;
    user: import("../reducers/userReducer").UserState;
}) => Product[]) & {
    clearCache: () => void;
    resultsCount: () => number;
    resetResultsCount: () => void;
} & {
    resultFunc: (resultFuncArgs_0: Product[]) => Product[];
    memoizedResultFunc: ((resultFuncArgs_0: Product[]) => Product[]) & {
        clearCache: () => void;
        resultsCount: () => number;
        resetResultsCount: () => void;
    };
    lastResult: () => Product[];
    dependencies: [(state: RootState) => Product[]];
    recomputations: () => number;
    resetRecomputations: () => void;
    dependencyRecomputations: () => number;
    resetDependencyRecomputations: () => void;
} & {
    memoize: typeof import("reselect").weakMapMemoize;
    argsMemoize: typeof import("reselect").weakMapMemoize;
};
