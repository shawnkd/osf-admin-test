import { EntityManager } from "typeorm";
import { FileService } from "medusa-interfaces";
import { BatchJobService, ProductService, ProductVariantService, RegionService, SalesChannelService, ShippingProfileService } from "../../../services";
import { CsvSchema } from "../../../interfaces/csv-parser";
import { FlagRouter } from "../../../utils/flag-router";
import { BatchJob } from "../../../models";
export declare type ProductImportBatchJob = BatchJob & {
    result: Pick<BatchJob, "result"> & {
        operations: {
            [K in keyof typeof OperationType]: number;
        };
    };
};
/**
 * DI props for the Product import strategy
 */
export declare type InjectedProps = {
    batchJobService: BatchJobService;
    productService: ProductService;
    productVariantService: ProductVariantService;
    shippingProfileService: ShippingProfileService;
    salesChannelService: SalesChannelService;
    regionService: RegionService;
    fileService: typeof FileService;
    featureFlagRouter: FlagRouter;
    manager: EntityManager;
};
/**
 * Data shape returned by the CSVParser.
 */
export declare type TParsedProductImportRowData = Record<string, string | number | (string | number | object)[]>;
/**
 * CSV parser's row reducer result data shape.
 */
export declare type TBuiltProductImportLine = Record<string, any>;
/**
 * Schema definition of for an import CSV file.
 */
export declare type ProductImportCsvSchema = CsvSchema<TParsedProductImportRowData, TBuiltProductImportLine>;
/**
 * Import Batch job context column type.
 */
export declare type ImportJobContext = {
    total: number;
    fileKey: string;
};
/**
 * Supported batch job import ops.
 */
export declare enum OperationType {
    ProductCreate = "PRODUCT_CREATE",
    ProductUpdate = "PRODUCT_UPDATE",
    VariantCreate = "VARIANT_CREATE",
    VariantUpdate = "VARIANT_UPDATE"
}
