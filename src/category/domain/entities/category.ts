export interface CategoryProps {
    name: string;
    description?: string;
    is_active?: boolean;
    created_at?: Date;
}

export class Category {
    constructor(private props: CategoryProps) {}

    get name(): string {
        return this.props.name;
    }

    get description(): string | undefined {
        return this.props.description;
    }

    get is_active(): boolean | undefined {
        return this.props.is_active;
    }

    get created_at(): Date | undefined {
        return this.props.created_at;
    }
}
