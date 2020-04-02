/**
 * Fast API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AttributeMeta model module.
 * @module model/AttributeMeta
 * @version 0.1.0
 */
class AttributeMeta {
    /**
     * Constructs a new <code>AttributeMeta</code>.
     * @alias module:model/AttributeMeta
     * @param attribute {Object} 
     */
    constructor(attribute) { 
        
        AttributeMeta.initialize(this, attribute);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, attribute) { 
        obj['attribute'] = attribute;
    }

    /**
     * Constructs a <code>AttributeMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributeMeta} obj Optional instance to populate.
     * @return {module:model/AttributeMeta} The populated <code>AttributeMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttributeMeta();

            if (data.hasOwnProperty('attribute')) {
                obj['attribute'] = ApiClient.convertToType(data['attribute'], Object);
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = ApiClient.convertToType(data['visible'], 'Boolean');
            }
            if (data.hasOwnProperty('arbitrary_input')) {
                obj['arbitrary_input'] = ApiClient.convertToType(data['arbitrary_input'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} attribute
 */
AttributeMeta.prototype['attribute'] = undefined;

/**
 * @member {String} label
 */
AttributeMeta.prototype['label'] = undefined;

/**
 * @member {Boolean} visible
 */
AttributeMeta.prototype['visible'] = undefined;

/**
 * @member {Boolean} arbitrary_input
 */
AttributeMeta.prototype['arbitrary_input'] = undefined;






export default AttributeMeta;
