import * as baseService from './base';

function insert(data) {
    return baseService.post('/api/authors', data);
}

export { insert };