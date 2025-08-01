import { RelationsOptions, SuperComponent } from '../common/src/index';
export default class Indexes extends SuperComponent {
    externalClasses: string[];
    properties: import("./type").TdIndexesProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    data: {
        prefix: string;
        classPrefix: string;
        _height: number;
        _indexList: any[];
        scrollTop: number;
        activeAnchor: any;
        showTips: boolean;
    };
    relations: RelationsOptions;
    behaviors: string[];
    timer: any;
    groupTop: any[];
    sidebar: any;
    observers: {
        indexList(v: any): void;
        height(v: any): void;
        current(current: string | number): void;
    };
    lifetimes: {
        ready(): void;
    };
    methods: {
        setHeight(height: string | number): void;
        setIndexList(list: any): void;
        getAllRect(): void;
        getAnchorsRect(): Promise<any[]>;
        getSidebarRect(): void;
        toggleTips(flag: boolean): void;
        setAnchorByCurrent(current: string | number, source: 'init' | 'click' | 'touch' | 'update'): void;
        onClick(e: any): void;
        onTouchMove(e: any): void;
        onTouchCancel(): void;
        onTouchEnd(e: any): void;
        onAnchorTouch: (...args: any[]) => void;
        setAnchorOnScroll(scrollTop: number): void;
        onScroll({ scrollTop }: {
            scrollTop: any;
        }): void;
    };
}
