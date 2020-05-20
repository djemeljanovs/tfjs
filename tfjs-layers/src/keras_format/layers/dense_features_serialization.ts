/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
import {BaseLayerSerialization, LayerConfig} from '../topology_config';

export interface DenseFeaturesLayerConfig extends LayerConfig {
    feature_columns: [];
    trainable?: boolean;
    name?: String;
}

// Update denseFeaturesLayerClassNames below in concert with this.
export type DenseFeaturesLayerSerialization =
    BaseLayerSerialization<'DenseFeatures', DenseFeaturesLayerConfig>;

export type DenseFeaturesLayerClassName = DenseFeaturesLayerSerialization['class_name'];

// We can't easily extract a string[] from the string union type, but we can
// recapitulate the list, enforcing at compile time that the values are valid.

/**
 * A string array of valid DenseFeaturesLayer class names.
 *
 * This is guaranteed to match the `DenseFeaturesLayerClassName` union type.
 */
export const denseFeaturesLayerClassNames: DenseFeaturesLayerClassName[] = [
    'DenseFeatures',
];
